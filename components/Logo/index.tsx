import { makeStyles } from "@material-ui/core";

function Logo(props: { color?: string }) {
  const classes = useStyles();
  return (
    <span className={classes.logo}>
      <svg
        id="Capa_1"
        data-name="Capa 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 766.73 319.79"
      >
        <text className="cls-1" transform="translate(383.36 141.1)">
          <tspan> </tspan>
          <tspan className="cls-2" x="23.52" y="0">
            {" "}
          </tspan>
          <tspan className="cls-2" x="145.53" y="0">
            {" "}
          </tspan>
        </text>
        <text className="cls-3" transform="translate(211.7 213.13)">
          E
          <tspan className="cls-4" x="74.34" y="0">
            v
          </tspan>
          <tspan className="cls-5" x="164.22" y="0">
            e
          </tspan>
          <tspan className="cls-6" x="217.77" y="0">
            n
          </tspan>
          <tspan className="cls-7" x="299.25" y="0">
            t
          </tspan>
          <tspan className="cls-8" x="364.35" y="0">
            o
          </tspan>
          <tspan className="cls-9" x="440.16" y="0">
            s
          </tspan>
          <tspan className="cls-10">
            <tspan x="-9.75" y="61">
              {" "}
            </tspan>
            <tspan className="cls-11" x="0.42" y="61">
              StreamingCuba
            </tspan>
          </tspan>
        </text>
      </svg>
    </span>
  );
}

const useStyles = makeStyles(() => ({
  logo: {
    width: "120px",
  },
}));

export default Logo;
