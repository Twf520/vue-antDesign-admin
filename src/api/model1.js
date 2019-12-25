import axios from 'axios'
export default {
  getList () {
    return axios.post('/api/getList', {
      name: '',
      page: 1,
      size: 10
    }).then((d) => {
      return d.data.data
    })
  }
}
