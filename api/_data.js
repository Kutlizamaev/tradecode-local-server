// api/_data.js

// Пользователи тут нам уже почти не нужны, но оставим для совместимости.
// Важно: в serverless окружении на Vercel НЕ стоит рассчитывать,
// что это будет "общая база" между разными эндпоинтами.
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

// 🔹 Мок подписок пользователя (для страницы "Подписки")
export const subscriptions = [
    {
        id: 1,
        ownerTelegramId: 475092284, // твой tg id, можно поменять
        serviceId: 1,
        accountNickname: 'Trader_1',
        accountUid: '123456789',
        status: 'active', // active | expiring | expired | not_activated
        daysLeft: 10,
    },
    {
        id: 2,
        ownerTelegramId: 475092284,
        serviceId: 1,
        accountNickname: 'Trader_2',
        accountUid: '987654321',
        status: 'expiring',
        daysLeft: 2,
    },
    {
        id: 3,
        ownerTelegramId: 475092284,
        serviceId: 2,
        accountNickname: 'PDF_User_1',
        accountUid: 'pdf-uid-1',
        status: 'expired',
        daysLeft: 0,
    },
    {
        id: 4,
        ownerTelegramId: 475092284,
        serviceId: 3,
        accountNickname: 'HTX_Boss',
        accountUid: 'htx-uid-1',
        status: 'not_activated',
        daysLeft: null,
    },
]

export const renderings = [
    {
        id: 1,
        ownerTelegramId: 475092284, // твой tg id
        serviceId: 4, // допустим, PDFChecker
        title: 'Отрисовка договора №123',
        price: 25,
        currency: 'USDT',
        status: 'pending', // pending | paid | cancelled
        createdAt: '2025-11-23T10:00:00Z',
    },
    {
        id: 2,
        ownerTelegramId: 475092284,
        serviceId: 4,
        title: 'Отрисовка отчёта за квартал',
        price: 40,
        currency: 'USDT',
        status: 'pending',
        createdAt: '2025-11-22T15:30:00Z',
    },
]
