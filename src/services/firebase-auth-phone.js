// @flow
import auth from '@react-native-firebase/auth';

export function verifyPhone(phoneNumber: string): Promise<any> {
    return new Promise((resolve, reject) => {
        auth()
            .verifyPhoneNumber(phoneNumber)
            .on('state_changed', (phoneAuthSnapshot) => {
                switch (phoneAuthSnapshot.state) {
                    case auth.PhoneAuthState.CODE_SENT:
                        resolve(phoneAuthSnapshot);
                        break;
                    case auth.PhoneAuthState.ERROR:
                        reject(phoneAuthSnapshot);
                        break;
                }
            }, (error) => {
                reject(error);
            });
    });
}
