//"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wa_1 = require("../wa");
const validate = (req, res, next) => {
    if (!(0, wa_1.sessionExists)(req.params.sessionId))
        return res.status(200).json({ 
            success: false,
            status: 'Session not found',
            user: null,
        });
    next();
};
exports.default = validate;
