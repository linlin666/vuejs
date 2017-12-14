import axios from './axios'
// import qs from 'qs'
// 判断环境
function _getBucket () {
  let currentDomain = document.domain
  if (currentDomain === 'tgy.daxgame.com') {
    return {
      uploadBucket: 'dxg-work-spreader/spreader'
    }
  } else {
    return {
      uploadBucket: 'dxg-test-spreader/spreader'
    }
  }
}
export default {
  getBucket () {
    return _getBucket()
  },
  // 上传接口
  upload: (files, bucket, type, progressCallback) => {
    let formData = new FormData()
    // console.log(files)
    let len = files.length
    // for (let file of files) {
    for (let i = 0; i < len; i++) {
      formData.append('files', files[i])
    }
    let config = {
      onUploadProgress: function (progressEvent) {
        let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        if (progressCallback) progressCallback(percentCompleted)
      },
      timeout: 20000
    }
    return axios.post(`/api/file/` + _getBucket().uploadBucket + `/` + type, formData, config)
  },
  testApi: req => {
    return axios.get('/api/cuea/common/matchItems')
  },
  postText: req => {
    return axios.post('/api/cuea/topic', req)
  }
}
