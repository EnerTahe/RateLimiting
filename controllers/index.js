class VideoStreamer {
      validator = (req, res, next) => {
                   next()
       }
       getVideo = (req, res) => {
                   res.status(200).send({
                        message : `Hello world!`
                   })
       }
}
export default new VideoStreamer();