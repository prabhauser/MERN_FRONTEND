import { Breadcrumbs } from '@mui/material';
import { Link } from 'react-router-dom';
import './index.scss';

type DataType = {
    name: string;
    currentRoute: boolean;
    routeLink?: string;
    onClick?: () => void;
};
type BreadCrumbsProps = {
    dataArray: DataType[];
};

const BreadCrumbs = (props: BreadCrumbsProps) => {
    const { dataArray } = props;
    return (
        <Breadcrumbs className="breadCrumbs">
            {dataArray.map((item, idx = 0) => {
                const index = idx + 1;
                return item.currentRoute ? (
                    <Link key={index} to="" className="anchorLinks anchorLinksActive">
                        {item.name}
                    </Link>
                ) : (
                    <Link
                        key={index}
                        to={item.routeLink ? item.routeLink : ''}
                        className="anchorLinks"
                        onClick={item?.onClick ? item.onClick : () => {}}
                    >
                        {item.name}
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
};
export default BreadCrumbs;
