// import * as types from './mutation_types';
// import axios from 'axios';
// import storage from 'good-storage';
//
// /**
//  * 登陆
//  * @param commit
//  * @param state
//  * @param userInfo
//  * @returns {Promise<any>}
//  * @constructor
//  */
// export function LOGIN({commit, state}, userInfo) {
//   return new Promise((resolve, reject) => {
//     axios({
//       method: 'post',
//       url: '/accounts/login',
//       data: userInfo
//     }).then(res => {
//       commit(types.SET_TOKEN, res.data);
//       storage.set('token', res.data);
//       axios({
//         method: 'get',
//         url: '/accounts'
//       }).then(res => {
//         commit(types.SET_ACCOUNT, res.data);
//         storage.set('account', res.data);
//         storage.session.set('firstLogin', true);
//         resolve(res);
//       }).catch(err => {
//         reject(err);
//       });
//     }).catch(err => {
//       reject(err);
//     });
//   });
// }
//
// /**
//  * 刷新
//  * @param commit
//  * @returns {Promise<any>}
//  * @constructor
//  */
// export function VERIFY({commit}) {
//   return new Promise((resolve, reject) => {
//     if (storage.session.has('firstLogin')) {
//       if (storage.has('token')) {
//         axios({
//           method: 'get',
//           url: '/accounts/verify'
//         })
//           .then(res => {
//             commit(types.SET_TOKEN, res.data);
//             storage.set('token', res.data);
//             resolve(res);
//           }).catch(error => {
//             reject(error);
//           });
//       }
//     }
//   });
// }
//
// /**
//  * 注册
//  * @param commit
//  * @param account
//  * @returns {Promise<any>}
//  * @constructor
//  */
// export function REGISTER({commit}, userInfo) {
//   return new Promise((resolve, reject) => {
//     axios({
//       method: 'post',
//       url: '/accounts',
//       data: userInfo
//     })
//       .then((res) => {
//         resolve(res);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }
//
// /**
//  * 登出
//  * @param commit
//  * @returns {Promise<any>}
//  * @constructor
//  */
// export function LOGIN_OUT({commit}) {
//   return new Promise((resolve, reject) => {
//     axios({
//       method: 'get',
//       url: '/accounts/logout'
//     })
//       .then((res) => {
//         commit(types.SET_TOKEN, '');
//         commit(types.SET_ACCOUNT, {});
//         storage.remove('token');
//         storage.remove('account');
//         resolve(res);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }
