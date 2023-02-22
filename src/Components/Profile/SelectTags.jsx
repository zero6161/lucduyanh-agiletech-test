// import { useTheme } from "@mui/material/styles";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import { httpClient } from "../../getApi";
// import React, { useState, useEffect } from "react";
// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

// export default function SelecTags(props) {
//   const { setTag, tag, tagName, setTagName } = props;
//   const theme = useTheme();
//   const [personName, setPersonName] = React.useState([]);

//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setPersonName(typeof value === "string" ? value.split(",") : value);
//     setTagName(event.target.value);
//   };

//   return (
//     <div>
//       <FormControl sx={{ ml: "43px", width: 368 }}>
//         <Select
//           multiple
//           displayEmpty
//           value={personName}
//           onChange={handleChange}
//           input={<OutlinedInput />}
//           renderValue={(selected) => {
//             if (selected.length === 0) {
//               return <em>Tags</em>;
//             }

//             return selected.join(", ");
//           }}
//           MenuProps={MenuProps}
//           inputProps={{ "aria-label": "Without label" }}
//         >
//           <MenuItem disabled value="">
//             <em>Tags</em>
//           </MenuItem>
//           {tag.map((name) => (
//             <MenuItem
//               key={name}
//               value={name}
//               style={getStyles(name, personName, theme)}
//             >
//               {name}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </div>
//   );
// }

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelecTags(props) {
  const { setTag, tag, tagName, setTagName } = props;

  const handleChange = (event) => {
    setTagName(event.target.value);
  };

  return (
    <Box sx={{ ml: "43px", width: "20vw" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tags</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tagName}
          label="Tags"
          onChange={handleChange}
        >
          {tag.map((item, index) => (
            <MenuItem value={item} key={index}>
              {item}
            </MenuItem>
          ))}
          <MenuItem value={""}>Delete Search</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
