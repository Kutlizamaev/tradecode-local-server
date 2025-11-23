export const users = [
    {
        id: 1,
        telegramId: 111111,
        telegramUsername: 'existing_user',
    },
]

export const balances = [
    {
        userId: 1,
        amount: 150.5,
        currency: 'USDT',
    },
]

export const services = [
    {
        id: 1,
        code: 'BYBIT_EYE',
        name: 'BybitEye',
        description: 'Подписки для аналитики Bybit',
    },
    {
        id: 2,
        code: 'PDF_CHECKER',
        name: 'PDFChecker',
        description: 'Проверка PDF документов',
    },
    {
        id: 3,
        code: 'HTX_EYE',
        name: 'HTXEye',
        description: 'Подписки для HTX',
    },
]

export const serviceStats = [
    {
        serviceId: 1,
        totalSubscriptions: 10,
        activeCount: 6,
        expiringSoonCount: 2,
        expiredCount: 1,
        notActivatedCount: 1,
    },
    {
        serviceId: 2,
        totalSubscriptions: 5,
        activeCount: 3,
        expiringSoonCount: 1,
        expiredCount: 0,
        notActivatedCount: 1,
    },
    {
        serviceId: 3,
        totalSubscriptions: 7,
        activeCount: 4,
        expiringSoonCount: 1,
        expiredCount: 1,
        notActivatedCount: 1,
    },
]
