import styles from '../styles/components/Profile.module.css';
export function Profile (){
    return(
        <div className={styles.profileCOntainer}>
        <img src="https://github.com/AurelioMesquita.png" alt="Aurélio Mesquita" />
        <div>
            <strong>Aurélio Mesquita</strong>
            <p>
                <img src="icons/level.svg" alt="Level"/>
                 Level 1
            </p>
        </div>
        </div>
        
    );
}