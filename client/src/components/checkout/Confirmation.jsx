import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useParams, Link }from "react-router-dom";


const Confirmation = () => {
    const { id } = useParams();
    return (
        <Box m="90px auto" width="80%" height="50vh">
            <Alert severity="success">
                <AlertTitle>Éxito</AlertTitle>
                Has hecho un pedido con éxito —{id}
                <strong>Felicidades por hacer su compra</strong>
            </Alert>
            <div>
                <Link to={"/"}>Volver a la Página Principal</Link>
            </div>
        </Box>
        
    );
};


export default Confirmation;