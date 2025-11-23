import { users, balances, services, serviceStats } from './_data.js'

function setCors(res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
}

function getUserFromAuthHeader(req) {
    const auth = req.headers['authorization'] || req.headers['Authorization']
    if (!auth || !auth.startsWith('Bearer ')) return null

    const token = auth.slice('Bearer '.length)
    const prefix = 'mock-token-for-'
    if (!token.startsWith(prefix)) return null

    const telegramIdStr = token.slice(prefix.length)
    const telegramId = Number(telegramIdStr)
    if (!telegramId) return null

    const user = users.find((u) => u.telegramId === telegramId)
    return user || null
}

export default async function handler(req, res) {
    setCors(res)

    if (req.method === 'OPTIONS') {
        return res.status(200).end()
    }

    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    const user = getUserFromAuthHeader(req)

    if (!user) {
        return res.status(401).json({ error: 'Unauthorized' })
    }

    let balance = balances.find((b) => b.userId === user.id)
    if (!balance) {
        balance = {
            userId: user.id,
            amount: 0,
            currency: 'USDT',
        }
        balances.push(balance)
    }

    return res.status(200).json({
        user,
        balance,
        services,
        stats: serviceStats,
    })
}
