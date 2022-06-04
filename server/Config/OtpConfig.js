import { authenticator, totp } from 'otplib';

totp.options = { digits: 6, step: 120 };

export function GenerateSecret() {
	return authenticator.generateSecret();
}
export function GenerateOtp(secret) {
	return totp.generate(secret);
}
export function VerifyOtp(otp, secret) {

	return totp.check(otp, secret);
}
export function ArraySecret(email, secret, otp, arraySecret) {
	const checked = arraySecret.every((val) => val?.email !== email);
	if (checked) {
		arraySecret.push({ email, secret,otp });
	}else {
        arraySecret = arraySecret.map((val) => {
            return val?.email === email ? {email, secret, otp} : val
        })
    }
	return arraySecret;
}