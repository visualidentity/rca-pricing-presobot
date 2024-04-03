export const getPDF = ({ name, value, data, superagent }) => {
  const fileEndpoint = data.urls.files;
  const [file] = value;
  if (!file) {
    return {
      context: {
        [name]: null
      }
    };
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("name", "Test");

  return superagent
    .post(fileEndpoint)
    .set(data.headers)
    .send(formData)
    .then(({ body }) => {
      const newFile = body.file;
      return {
        context: {
          [name]: newFile
        }
      };
    })
    .catch(err => {
      console.warn(err);
      return {
        context: {
          [name]: null
        }
      };
    });
};
