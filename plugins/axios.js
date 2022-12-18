export default function ({ $axios, app, redirect }) {
  const token = process.env.API_TOKEN
  $axios.setToken(token, 'Bearer')
}
