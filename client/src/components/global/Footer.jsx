import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
    const {
        palette: { neutral },
    } = useTheme();
    return (
        <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
            <Box
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                rowGap="30px"
                columnGap="clamp(20px, 30px, 40px)"
            >
                <Box width="clamp(20%, 30%, 40%)">
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        mb="30px"
                        color={shades.secondary[500]}
                    >
                        <img src="https://ve.epaenlinea.com/static/version1668698844/frontend/EPA/EpaThemeVE/es_VE/images/epa_logo.png" alt="Logo" className='logo' />
                    </Typography>
                    <div>
                    ¡Haga de su hogar su mejor lugar!
                    </div>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                        Nosotros
                    </Typography>
                    <Typography mb="30px">Únete al equipo</Typography>
                    <Typography mb="30px">Tiendas</Typography>
                    <Typography mb="30px">Términos y condiciones</Typography>
                    <Typography mb="30px">Reglamentos</Typography>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                        Ayuda y contacto
                    </Typography>
                    <Typography mb="30px">Preguntas frecuentes</Typography>
                    <Typography mb="30px">Acción Social</Typography>
                    <Typography mb="30px">Venta a empresas</Typography>
                    <Typography mb="30px">Medios de pago</Typography>
                </Box>

                <Box width="clamp(20%, 25%, 30%)">
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                        Contáctenos
                    </Typography>
                    <Typography mb="30px">
                    Av. Uslar cruce con calle Michelena, Valencia, Edo. Carabobo
                    </Typography>
                    <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
                        Email: ferreteriaepa@gmail.com
                    </Typography>
                    <Typography mb="30px">0500-EPAVALE (3728253)</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;