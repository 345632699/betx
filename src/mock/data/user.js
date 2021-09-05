import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '张某某'
  }
];

const Users = [];
for (let i = 0; i < 10; i++) {
  Users.push(Mock.mock({
    report: "2021082722272564021",
    user: Mock.Random.cname(),
    types: Mock.Random.cname(),
    // amount1: Mock.mock('@county(true)'),
    'amount1|18-60': 1,
    'amount2|18-60': 1,
    'amount3|18-60': 1,
    time: Mock.Random.date()
  }));
}
export { LoginUsers, Users };
