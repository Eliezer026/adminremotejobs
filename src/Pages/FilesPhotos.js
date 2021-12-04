import React, { Component } from "react";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import Firebase from "../firebase";
import { auth } from "../firebase";

class FilesPhotos extends Component {
  constructor() {
    super();
    this.state = {
      uploadValue: 0,
      namefiles: "",
      informations: "",
      namecompany: "",
      namepost: "",
      picture: "",
    };

    this.handleUpload = this.handleUpload.bind(this);
    this.handlename = this.handlename.bind(this);
    this.save = this.handleUpload.bind();
  }

  handlename(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleUpload(event) {
    const file = event.target.files[0];
    this.setState({
      namefiles: file,
    });
  }

  render() {
    const save = () => {
      const informjobs = this.state.informations;
      const namefiles = this.state.namefiles;
      const namecompany = this.state.namecompany;
      const namepost = this.state.namepost;

      const storageRef = Firebase.storage().ref(
        `/photoscompany/${namecompany}`
      );
      const task = storageRef.put(namefiles);

      task.on(
        "state_changed",
        (snapshot) => {
          let porcentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          this.setState({
            uploadValue: porcentage,
          });
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          console.log("image success");

          auth.onAuthStateChanged((user) => {
            storageRef.getDownloadURL().then((pictureUrll) => {
              this.setState({
                picture: pictureUrll,
              });

              console.log(this.state.picture + "dfsdfdsf");
              console.log(this.state.picture + "databases");

              Firebase.database()
                .ref("JobsInformations")
                .child(namecompany + namepost)
                .set(
                  {
                    namecompany: namecompany,
                    informjobs: informjobs,
                    namepost: namepost,
                    pictureUrl: this.state.picture,
                  },
                  (error) => {
                    if (error) {
                      // The write failed...
                      console.log("one error dates" + error);
                    } else {
                      // Data saved successfully!
                      console.log("save dates");
                    }
                  }
                );
            });
          });
        }
      );
    };

    return (
      <div>
        <div>
          <TextField
            id="standard-multiline-static"
            htmlFor="standard-adornment-amount"
            label="Name"
            name="namecompany"
            onChange={this.handlename}
            multiline
            rowsMax="40"
          />
          <TextField
            id="standard-multiline-static"
            htmlFor="standard-adornment-amount"
            label="Informations Jobs"
            name="informations"
            onChange={this.handlename}
            multiline
            rowsMax="40"
          />
          <TextField
            id="standard-multiline-static"
            htmlFor="standard-adornment-amount"
            label="NamePost"
            name="namepost"
            onChange={this.handlename}
            multiline
            rowsMax="40"
          />
        </div>

        <progress value={this.state.uploadValue}>
          {this.state.uploadValue} %
        </progress>
        <br />
        <input type="file" onChange={this.handleUpload} max="100"></input>
        <br />

        <br />
        <Button
          onClick={() => save()}
          variant="outlined"
          startIcon={<SaveIcon />}
          color="primary"
        >
          Send
        </Button>
      </div>
    );
  }
}

export default FilesPhotos;
