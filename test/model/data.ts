export const userData = {
    userValid:{
        lastName:'Hồ',
        firstName:'Dương',
        email:'hothianhduong221024@gmail.com',
        password:'anhduong123',
        mess: 'Register success'
    },
    userExistEmail:{
        lastName:'Hồ',
        firstName:'Dương',
        email:'hothianhduong221024@gmail.com',
        password:'anhduong123',
        mess: 'Email đã tồn tại. Nếu bạn quên mật khẩu, bạn có thể thiết lập lại mật khẩu tại đây.'
    },
    userNoExistEmail:{
        lastName:'Hồ',
        firstName:'Dương',
        email:'duonglaxinhnhat@gmail.com',
        password:'anhduong123',
        mess: 'Thông tin đăng nhập không hợp lệ.'
    },
    userInvalidEmailFormat:{
        lastName:'Hồ',
        firstName:'Dương',
        email:'hothianhduong221024@gmailcom',
        password:'anhduong123',
        mess: 'Email không hợp lệ.'
    },
    userAllEmptyField:{
        lastName:'',
        firstName:'',
        email:'',
        password:'',
        mess: ''
    },
    userShortPassword:{
        lastName:'Hồ',
        firstName:'Dương',
        email:'hothianhduong2210246@gmail.com',
        password:'1',
        mess:'Mật khẩu quá ngắn (tối thiểu 5 ký tự).',
        messLogin:'Thông tin đăng nhập không hợp lệ.'
    },
    userLongPassword:{
        lastName:'Hồ',
        firstName:'Dương',
        email:'hothianhduong2210245@gmail.com',
        password:'ThisIsAVeryLongPasswordThatExceedsTheLimitThisIsAVeryLongPasswordThatExceedsTheLimitThisIsAVeryLongPasswordThatExceedsTheLimitThisIsAVeryLongPasswordThatExceedsTheLimit',
        mess:'Mật khẩu quá dài.'
    },
    userExistEmailButCorrectPass:{
        lastName:'Hồ',
        firstName:'Dương',
        email:'hothianhduong221024@gmail.com',
        password:'anhduong12',
        mess:'Thông tin đăng nhập không hợp lệ.'
    },
}