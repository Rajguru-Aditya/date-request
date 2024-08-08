import { useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// import adityaImg from "./assets/adityaSheetalImg.jpeg";
import adityaImg from "./assets/adityaSheetalImgNew.webp";
import Confetti from "react-confetti";

function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noClicked, setNoClicked] = useState(false);
  const [openNoModal, setOpenNoModal] = useState(false);
  const [openYesModal, setOpenYesModal] = useState(false);
  const { width, height } = {
    width: window.innerWidth - 40,
    height: window.innerHeight,
  };

  const handleYesClick = () => {
    setYesClicked(true);
    setNoClicked(false);
    handleYesModalOpen();
  };

  const handleNoClick = () => {
    setNoClicked(true);
    setYesClicked(false);
    handleModalOpen();
  };

  const handleModalOpen = () => {
    setOpenNoModal(true);
  };

  const handleModalClose = () => {
    setOpenNoModal(false);
  };

  const handleYesModalOpen = () => {
    setOpenYesModal(true);
  };

  const handleYesModalClose = () => {
    setOpenYesModal(false);
    setYesClicked(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
    alignItems: "center",
    textAlign: "center",
  };

  const NoModal = () => (
    <Modal
      open={openNoModal}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Are you sure you want to reject Aditya?
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          You will not be able to change your decision.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
            gap: 2,
          }}
        >
          <button className="buttons" onClick={handleModalClose}>
            Cancel
          </button>
          <button className="buttons" onClick={handleYesClick}>
            Reject
          </button>
        </Box>
      </Box>
    </Modal>
  );

  const YesModal = () => (
    <Modal
      open={openYesModal}
      onClose={handleYesModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h2" component="h1">
          Aditya is Very Happy!🎉
        </Typography>
        <img
          // src="https://gifdb.com/images/high/good-vibes-party-dancing-4h6lxt1q9ysbr61r.gif"
          src={adityaImg}
          alt="Dancing GIF"
          style={{ width: "100%", borderRadius: "10px", marginTop: "20px" }}
        />
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Message him on Instagram about how you feel about this.
        </Typography>
      </Box>
    </Modal>
  );

  return (
    <div
      style={{
        maxWidth: "350px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "auto",
        padding: "0 20px",
        borderRadius: "10px",
        boxSizing: "border-box",
        height: window.innerHeight,
      }}
    >
      {yesClicked && (
        <Confetti
          width={width}
          height={height}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: "100",
          }}
        />
      )}
      <NoModal />
      <YesModal />
      <img
        src="https://cdn.pixabay.com/photo/2022/01/27/05/00/cute-couple-6971070_1280.png"
        alt="Couple"
        style={{
          width: "100%",
          borderRadius: "10px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      />
      <h1 className="title">
        Will You Go On A Date With Me, <span className="sheetal">Sheetal?</span>
      </h1>
      <div className="buttonContainer">
        <button className="buttons" onClick={handleYesClick}>
          Yes
        </button>
        <button className="buttons" onClick={handleNoClick}>
          No
        </button>
      </div>
    </div>
  );
}

export default App;
