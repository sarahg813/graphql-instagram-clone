import React from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    singleUpload(file: $file) {
      filename
    }
  }
`;

const UploadFile = () => {
  return (
    <Mutation mutation={UPLOAD_FILE}>
      {uploadFile => (
        <input
          type="file"
          required
          onChange={({
            target: {
              validity,
              files: [file]
            }
          }) => validity.valid && uploadFile({ variables: { file } })}
        />
      )}
    </Mutation>
  );
};

export default UploadFile;
