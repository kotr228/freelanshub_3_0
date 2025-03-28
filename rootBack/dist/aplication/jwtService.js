"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.jwtService = {
    createJWT(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = jsonwebtoken_1.default.sign({ userId: user.id }, "1234", { expiresIn: "24h" });
            return token;
        });
    },
    getUserIdByToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Замените `YOUR_SECRET_KEY` на ваш фактический секретный ключ
                const secretKey = "1234";
                // Расшифровываем токен
                const decoded = jsonwebtoken_1.default.verify(token, secretKey);
                // Проверяем, содержит ли декодированный объект `userId`
                if (decoded && decoded.userId) {
                    return decoded.userId; // Преобразуем userId в ObjectId
                }
                else {
                    return null; // Возвращаем null, если userId отсутствует
                }
            }
            catch (error) {
                console.error('Error verifying token:', error);
                return null; // Возвращаем null при ошибке
            }
        });
    }
};
