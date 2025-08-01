
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import RegisterForm from '@/components/registration'; 
import Login from '@/components/sign-in';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  pt: 1,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <React.Fragment>
      <Button onClick={handleOpen} sx={{ textTransform: 'none', padding: 0, margin: 0, color: 'purple' }}>New user? Register now</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        >
        <Box sx={{ ...style, 
          width: 400, 
          borderRadius: '1rem', 
          backgroundColor: '#f5f5f5',
        }}>
          
        <RegisterForm handleClose={handleClose} />
          <Button onClick={handleClose} sx={{ textTransform: 'none', padding: 0, margin: 0, color: 'purple' }}>Existing user? Sign in</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

interface RegisterModalProps {
  open: boolean;
  handleClose: () => void;
}
export default function RegisterModal({ open, handleClose }: RegisterModalProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box
        sx={{
          ...style,
          width: 400,
          borderRadius: '1rem', 
          backgroundColor: '#f5f5f5', 
          // backdropFilter: 'blur(8px)',
        }}
      >
        <Login handleClose={handleClose} />
        <ChildModal />
      </Box>
    </Modal>
  );
}

