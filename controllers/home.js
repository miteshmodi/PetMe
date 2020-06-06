exports.getDefaultPage = (req, res, next) => {
    res.render('index' , {
        title: 'PetMe | Home'
    });
};
