module.exports = function (app) {
    app.get('/profile', (req, res) => {
        var result = [
            {
                "s1p": "Я усердный, усидчивый, устремленный, уверенный, упорный",
                "s1": "Обо мне",
                "s2": "Мои проекты",
                "s2l": [
                    "Тетрис на javaFX",
                    "Тетрис на Pascal.net",
                    "Этот сайт"
                ]
            }
        ];
        res.send(JSON.stringify(result));
    })
};