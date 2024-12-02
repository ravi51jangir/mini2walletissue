import { FunctionComponent, useCallback } from 'react';
import styles from '../css_modules/NFT.module.css';
import {images} from '../StoreImages/StoreImages';

const NFT:FunctionComponent = () => {
  	
  	const onVectorIconClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.nft7}>
      			<b className={styles.b}>10:00</b>
      			<img className={styles.vectorIcon} alt="" src="Vector.svg" />
      			<img className={styles.vectorIcon1} alt="" src="Vector.svg" />
      			<img className={styles.vectorIcon2} alt="" src="Vector.svg" />
      			<img className={styles.vectorIcon3} alt="" src="Vector.svg" />
      			<img className={styles.vectorIcon4} alt="" src="Vector.svg" />
      			<div className={styles.nft7Child} />
      			<img className={styles.vectorIcon5} alt="" src="Vector.svg" onClick={onVectorIconClick} />
      			<img className={styles.vectorIcon6} alt="" src="Vector.svg" />
      			<img className={styles.vectorIcon7} alt="" src="Vector.svg" />
      			<img className={styles.vectorIcon8} alt="" src="Vector.svg" />
      			<img className={styles.vectorIcon9} alt="" src="Vector.svg" />
      			<img className={styles.icon} alt="" src={images.IcoButton}onClick={onVectorIconClick} />
      			<img className={styles.icon1} alt="" src={images.NftButton} />
      			<img className={styles.vectorIcon10} alt="" src="Vector.svg" />
      			<div className={styles.nft7Item} />
      			<img className={styles.a6bbfbefcec98bfe409a4ac089d34dIcon} alt="" src={images.NftBox} />
      			<img className={styles.icon2} alt="" src={images.NftBox1} />
      			<img className={styles.icon3} alt="" src={images.NftBox2} />
      			<div className={styles.nft7Inner} />
      			<div className={styles.ellipseDiv} />
      			<b className={styles.discoverExclusive}>{`Discover exclusive `}</b>
      			<b className={styles.nfts}>NFTs!</b>
      			<img className={styles.icon4} alt="" src={images.CommingSoon} />
    		</div>);
};

export default NFT;
