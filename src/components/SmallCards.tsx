import {LiStatus, ArticleCard, DivCardInfo} from '../theme/styledTags';
import {Link} from 'react-router-dom';
import type {Resident} from "../views/Location";

type Props = {
    residents: Resident[];
}

export default function SmallCards({residents}: Props) {
    return (
        <>
            {residents.map(resident =>
                <Link key={resident.id} to={`/character/${resident.id}`}>
                    <ArticleCard style={{    width: "10vw" }}>
                        <img src={resident.image} alt={resident.name}/>
                        <DivCardInfo>
                            <h2>{resident.name}</h2>
                            <ul>
                                <LiStatus color={
                                    resident.status === 'Alive' ? 'var(--green)'
                                        : resident.status === 'Dead' ? 'rgb(255,0,0)'
                                            : 'var(--bg-2)'
                                }>
                                    {resident.status} - {resident.species}
                                </LiStatus>
                            </ul>
                        </DivCardInfo>
                    </ArticleCard>
                </Link>
            )}
        </>
    );
}