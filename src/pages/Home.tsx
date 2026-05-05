import { Link } from "react-router";
import { paths } from "../routes";
import { useTypedIntl } from "../lang/hooks";

export const Home = () => {
  const intl = useTypedIntl();

  return (
    <>
      <div className="description">
        <h1 className="fz-m">{intl.formatMessage({ id: "description" })}</h1>
        <p
          className="mb-1 text-regular"
          dangerouslySetInnerHTML={{
            __html: `${intl.formatMessage({ id: "bio" })}`,
          }}
        />
        <h2>
          <span className="text-medium fz-m">
            {intl.formatMessage({ id: "have-a-good-day" })} –{" "}
          </span>
          <span className="title fz-l">Maka Art ❤️</span>
        </h2>
      </div>
      <nav>
        <ul>
          <li>
            <Link className="button" to={paths.materials}>
              {intl.formatMessage({
                id: "materials.link",
              })}
            </Link>
          </li>
          <li>
            <Link className="button" to={paths.commission}>
              {intl.formatMessage({
                id: "comissionInfo",
              })}
            </Link>
          </li>
          <li>
            <Link className="button" to={paths.social}>
              {intl.formatMessage({
                id: "socialLinks",
              })}
            </Link>
          </li>
          <li>
            <Link className="button" to={paths.supportMe}>
              {intl.formatMessage({
                id: "supportMe",
              })}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
