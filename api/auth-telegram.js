import { users } from './_data.js'

function setCors(res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
}

export default async function handler(req, res) {
    setCors(res)

    if (req.method === 'OPTIONS') {
        return res.status(200).end()
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    const { initData } = req.body || {}

    if (!initData) {
        return res.status(400).json({ error: 'initData is required' })
    }

    const params = new URLSearchParams(initData)
    const userParam = params.get('user')

    if (!userParam) {
        return res.status(400).json({ error: 'user field missing in initData' })
    }

    let userObj
    try {
        userObj = JSON.parse(userParam)
    } catch {
        try {
            userObj = JSON.parse(decodeURIComponent(userParam))
        } catch (e) {
            console.error('Failed to parse user from initData', e)
            return res.status(400).json({ error: 'invalid user field' })
        }
    }

    const telegramId = userObj.id
    const username = userObj.username || userObj.first_name || 'no_username'

    if (!telegramId) {
        return res.status(400).json({ error: 'telegramId not found in user' })
    }

    let user = users.find((u) => u.telegramId === telegramId)

    if (!user) {
        user = {
            id: users.length + 1,
            telegramId,
            telegramUsername: username,
        }
        users.push(user)
        console.log('created new user', user)
    } else {
        console.log('found existing user', user)
    }

    const token = `mock-token-for-${telegramId}`

    return res.status(200).json({
        token,
        user,
    })
}
