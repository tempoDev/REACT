import { useState } from "react"

export default function TwitterFollowCard({ children, userName, initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    console.log("Render: " + userName)

    const text = isFollowing ? "Siguiento" : "Seguir";
    const buttonClassName = isFollowing
    ? 'tw-followCard-button isFollowing'
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

  return (
    <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img 
                className="tw-followCard-avatar"
                alt={`Foto de avatar de ${userName}`}
                src={`https://unavatar.io/${userName}`}
            />
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className="tw-followCard-text">{text}</span>
                <span className="tw-followCard-stopFollow">Dejar de seguir</span>
            </button>
        </aside>
    </article>
  )
}
