import nodemailer from 'nodemailer';
import {FormMail} from "./FormMail.js"

export const SendMail = (mail, username, code) => {
	//configure mail sending protocol
	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 587,
		secure: false,
		auth: {
			user: process.env.USER_MAIL,
			pass: process.env.PASS_MAIL,
		},
	});
	//return promise
	return transporter.sendMail({
		from: '"DEV.TO Clone" <daylataikhoantest.dev@gmail.com>',
		to: `${mail}`,
		subject: '[DEV.TO Clone] Quên mật khẩu',
		html: FormMail(code,username)
	});
};

