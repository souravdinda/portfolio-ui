import Grid from "@mui/material/Grid";
import avatarImage from "../../assets/souravdinda5.png";
import Box from "@mui/material/Box";
import CustomButton from "../../common/CustomButton/CustomButton";
import PageHeader from "../../common/PageHeader/PageHeader";
import Typography from "@mui/material/Typography";

interface AboutProps {
    bio: string;
}

const About: React.FC<AboutProps> = ({ bio }) => {
    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={6}
                container
                justifyContent="center"
            >
                <img src={avatarImage}
                    alt="Avatar"
                    style={{
                        margin: "auto",
                        height: "auto",
                        maxWidth: "300px",
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Box sx={{
                    textAlign: {
                        xs: "center",
                        sm: "left",
                    },
                }}
                >
                    <PageHeader
                        title="About Me"
                        subtitle1="An Engineer With Passion"
                        sx={{
                            textAlign: {
                                xs: "center",
                                sm: "left",
                            }
                        }}
                    />
                    <Typography dangerouslySetInnerHTML={{ __html: bio }} />
                    <Box
                        pt={2}
                        display={"flex"}
                        flexDirection={"row"}
                        justifyContent={{ xs: "center", md: "flex-start" }}
                    >
                        <Box mr={1}>
                            <CustomButton
                                label="Hire Me"
                            />
                        </Box>
                        <Box>
                            <CustomButton
                                label="Download CV"
                                color="green"
                            />
                        </Box>
                    </Box>
                </Box>

            </Grid>
        </Grid>
    )
};

export default About;