import { FunctionComponent, useCallback } from 'react';
import styles from '../css_modules/Stack.module.css';
import {images} from '../StoreImages/StoreImages';

const Stack:FunctionComponent = () => {
  	
  	const onVectorIconClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.stack9}>
      			<b className={styles.b}>10:00</b>
      			<img className={styles.vectorIcon} alt="" src="Vector.svg" />
      			<img className={styles.vectorIcon1} alt="" src="Vector.svg" />
      			<img className={styles.vectorIcon2} alt="" src="Vector.svg" />
      			<img className={styles.vectorIcon3} alt="" src="Vector.svg" />
      			<img className={styles.vectorIcon4} alt="" src="Vector.svg" />
      			<div className={styles.stack9Child} />
      			<img className={styles.vectorIcon5} alt="" src="Vector.svg" onClick={onVectorIconClick} />
      			<img className={styles.vectorIcon6} alt="" src="Vector.svg" />
      			<img className={styles.vectorIcon7} alt="" src="Vector.svg" />
      			<img className={styles.vectorIcon8} alt="" src="Vector.svg" />
      			<img className={styles.vectorIcon9} alt="" src="Vector.svg" />
      			<img className={styles.icon} alt="" src="2 1727.png" onClick={onVectorIconClick} />
      			<img className={styles.icon1} alt="" src="1 1210694.png" onClick={onVectorIconClick} />
      			<img className={styles.vectorIcon10} alt="" src="Vector.svg" />
      			<div className={styles.stack9Item} />
      			<img className={styles.defd693f837df458c6edad61Icon} alt="" src={images.StakePageImage} />
      			<img className={styles.icon2} alt="" src={images.NftBox2} />
      			<img className={styles.icon3} alt="" src={images.NftBox3}/>
      			<div className={styles.e4122042b870e719eb816ec56dd51c} />
      			<div className={styles.earnRewardsEffortlesslyContainer}>
        				<p className={styles.earnRewardsEffortlesslyWith}>
          					<span className={styles.earn}>Earn</span>
          					<span>{` rewards effortlessly with `}</span>
        				</p>
        				<p className={styles.earnRewardsEffortlesslyWith}>
          					<span>{`our upcoming `}</span>
          					<span className={styles.earn}>staking</span>
          					<span className={styles.options}> options!</span>
        				</p>
      			</div>
      			<img className={styles.icon4} alt="" src={images.CommingSoon} />
    		</div>);
};

export default Stack;
