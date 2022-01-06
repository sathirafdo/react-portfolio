export const projectBoxClasses = {
  projectsContainer: {
    display: "flex",
    margin: "10px 10px",
    justifyContent: "center",
    flexDirection: "column",
    /* '@Flip': {
    margin: '100px 10px',
  },
  '@iPhonePlus': {
    alignItems: 'center',
  }, */
  },

  projectsGrid: {
    width: "95vw",
    display: "grid",
    gap: "2rem",
    // gridTemplateColumns: "repeat(auto-fill, minmax(350px, 0fr))",
    overflow: "hidden",
    /* '@iPhonePlus': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 0fr))',
  },
  '@iPad': {
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 0fr))',
  }, */
  },

  projectsHeader: {
    display: "inline-block",
    background: "white",
    width: "fit-content",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "5",
    margin: "150px 0",
    textAlign: "center",
  },

  projectBox: {
    display: "flex",
    flexDirection: "column",
    // opacity: 0.2,
    // background: "#232222",
    background: "rgba(66, 66, 66, .09)",
    width: "100%",
    height: 300,
    padding: 30,
    margin: "10px 0",

    justifyContent: "space-between",
    transition: "0.1s linear",
    borderRadius: 5,
    "&:hover": {
      background: "rgba(66, 66, 66, .5)",
    },
    /* '@iPad': {
    width: 300,
  },
  '@iPhoneSE': {
    width: 280,
  }, */
  },

  projectHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  projectLinks: {
    display: "flex",
  },

  projectLink: {
    marginLeft: 20,
    color: "white",
    transition: "0.1s linear",
    "&:hover": {
      transform: "scale(1.1, 1.1)",
    },
  },

  projectTopContainer: {
    display: "flex",
    flexDirection: "column",
  },

  projectTitle: {
    // fontFamily: "primary",
    fontSize: 35,
    margin: "20px 0",
    color: "#008AD8",
    fontWeight: 1000,
  },

  projectDescription: {
    color: "#a0a0a0",
    // fontFamily: "primary",
    fontSize: "2",
  },

  tags: {
    // fontFamily: "mono",
    fontSize: "0.8em",
    fontWeight: "bold",
    color: "#024fb4",
  },
};

export default projectBoxClasses;
