import Typography from "@mui/material/Typography";
import ContributionForm from "/components/ContributionForm";
import Template from "/containers/Template";
const Contribution = () => {
    return (
        <Template title="Contribution | Hanzi Dict">
            <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontWeight: "bold" }}
            >
                UPLOAD YOUR CHARACTER
            </Typography>
            <ContributionForm></ContributionForm>
        </Template>
    );
};

export default Contribution;
