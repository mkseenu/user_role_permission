const ROLE = {
    ADMIN : 'admin',
    BASIC : 'basic'
}

module.exports = {
    ROLE : ROLE,
    users : [
        { id : 1, name : "seenu", role : ROLE.ADMIN},
        { id : 2, name : "mkseenu", role : ROLE.BASIC},
        { id : 3, name : "svkanish", role : ROLE.BASIC},
    ]
}