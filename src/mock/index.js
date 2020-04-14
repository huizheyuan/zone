import Mock from 'mockjs'

const getCode = req => {
    req = JSON.parse(req.body)
    console.log(req)
    return {code: '123456'}
}

Mock.mock(/\getCode/, getCode)

export default Mock
