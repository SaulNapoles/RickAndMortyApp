import PropTypes from 'prop-types';

const styles = {
    container: {
      background: "rgb(60, 62, 68)",
      borderRadius: "0.5rem",
      width: 600,
      height: 220,
      display: "flex",
      margin: "0.72rem",
      boxShadow: "rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px",
      overflow: "hidden",
      gap: 16,
      fontSize: 20,
      fontFamily: "sans-serif",
      color: "white"
    },
    icon: (status) => ({
      width: 8,
      height: 8,
      marginRight: 8,
      alignSelf: "center",
      justifySelf: "center",
      borderRadius: "50%",
      background:
        status === "Alive" ? "green" : status === "Dead" ? "red" : "gray"
    }),
    statusContainer: {
      display: "flex",
      height: 24,
      marginBottom: 15,
      backgroundColor: "white"
    },
    specieContainer:{
        backgroundColor: "white"
    }
};

export const GridItem = ({ name, status, species, image }) => {
  return (
    <div className="card">
        <img src={ image } alt={ name } />
        <p>{ name }</p>
        <div style={styles.statusContainer}>
            <div style={styles.icon(status)} />
            <span style={styles.specieContainer}>
                {status} - {species}
            </span>
        </div>
    </div>
  )
}

GridItem.propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}