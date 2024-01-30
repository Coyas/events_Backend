import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  Box,
  Paper,
  FormControlLabel,
  Checkbox,
  Link,
} from "@mui/material";
import { useFormik } from 'formik'
export default function SignUp() {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Container sx={styles.container} component="main" maxWidth="xs">
      <Box textAlign="center" m={4}>
        <Typography variant="h3" component="h1">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmi} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            label="User Name"
            name="name"
            autoComplete="name"
            required
            onChange={formik.handleChange}
            value={formik.values.name}
          />
                   <TextField
            margin="normal"
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            required
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            required
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Button
            sx={{ mt: 3, mb: 2 }}
            type="submit"
            variant="contained"
            fullWidth
          >
            Sign up
          </Button>
        </Box>
      </Box>
    </Container>
  );
}