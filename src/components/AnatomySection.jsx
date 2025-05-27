// import React from "react";
// import { Card, CardContent, Typography } from "@mui/material";

// const AnatomySection = () => {
//   return (
//     <Card className="bg-white shadow-lg rounded-lg p-4 flex justify-center items-center relative">
//       <CardContent>
//         <img
//           src="./src/assets/anatomy.png"
//           alt="Human Anatomy"
//           className="h-64"
//         />
//         <div className="absolute top-20 left-20 bg-blue-100 text-blue-600 px-2 py-1 rounded-lg">
//           <Typography variant="caption">Healthy Heart</Typography>
//         </div>
//         <div className="absolute bottom-20 right-20 bg-blue-100 text-blue-600 px-2 py-1 rounded-lg">
//           <Typography variant="caption">Healthy Log</Typography>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default AnatomySection;

import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import anatomyImage from "../assets/anatomy.png"; // ✅ Correct image import

const AnatomySection = () => {
  return (
    <Card
      sx={{
        bgcolor: "white",
        boxShadow: 3,
        borderRadius: 2,
        p: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <CardContent>
        <img
          src={anatomyImage} // ✅ Use the imported variable
          alt="Human Anatomy"
          style={{ height: "17rem" }}
        />
        <div
          style={{
            position: "absolute",
            top: "5rem",
            right: "4rem",
            backgroundColor: "#DBEAFE", // blue-100
            color: "#2563EB", // blue-600
            padding: "0.25rem 0.5rem",
            borderRadius: "0.5rem",
          }}
        >
          <Typography variant="caption">Healthy Heart</Typography>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "5rem",
            left: "5rem",
            backgroundColor: "#DBEAFE",
            color: "#2563EB",
            padding: "0.25rem 0.5rem",
            borderRadius: "0.5rem",
          }}
        >
          <Typography variant="caption">Healthy Log</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnatomySection;
