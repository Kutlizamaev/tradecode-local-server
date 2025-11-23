// api/subscriptions.js
import { subscriptions, services } from './_data.js'

function setCors(res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
}

function getTelegramIdFromAuth(req) {
    const auth = req.headers['authorization'] || req.headers['Authorization']
    if (!auth || !auth.startsWith('Bearer ')) return null

    const token = auth.slice('Bearer '.length)
    const prefix = 'mock-token-for-'
    if (!token.startsWith(prefix)) return null

    const telegramId = Number(token.slice(prefix.length))
    return telegramId || null
}

export default async function handler(req, res) {
    setCors(res)

    if (req.method === 'OPTIONS') {
        return res.status(200).end()
    }

    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    const telegramId = getTelegramIdFromAuth(req)
    if (!telegramId) {
        return res.status(401).json({ error: 'Unauthorized' })
    }

    // фильтруем подписки по владельцу
    const userSubs = subscriptions.filter(
        (s) => s.ownerTelegramId === telegramId
    )

    // приклеим к каждой подписке инфу о сервисе
    const withService = userSubs.map((sub) => {
        const service = services.find((s) => s.id === sub.serviceId)
        return {
            ...sub,
            service: service || null,
        }
    })

    return res.status(200).json({
        items: withService,
    })
}
