import { FunctionComponent, useCallback } from 'react';
import styles from '../css_modules/NFT.module.css';
import { images } from '../StoreImages/StoreImages';




const NFT:FunctionComponent = () => {
  	
  	const onHomeButtonIconClick = useCallback(() => {
    		// Add your code here
  	}, []);
	  
  	
  	return (
    		<div className={styles.nft7}>
      			<img className={styles.buttonsBackground} alt="" src={images.ButtonsBackground}  />
      			<img className={styles.homeButtonIcon} alt="" src={images.HomeButton} onClick={onHomeButtonIconClick} />
      			<img className={styles.notificationButtonIcon} alt="" src={images.NotificationButton} />
      			<img className={styles.stackButtonIcon} alt="" src={images.StackButton} />
      			<img className={styles.icoButtonIcon} alt="" src={images.ICOButton} onClick={onHomeButtonIconClick} />
      			<img className={styles.nftButtonIcon} alt="" src={images.NFTButton}/>
      			<img className={styles.cursorBendIcon} alt="" src={images.cursorbend} />
      			<div className={styles.cursorButton} />
      			<img className={styles.nftimageboxIcon} alt="" src={images.NftImageBox} />
      			<img className={styles.nftboxBack2Icon} alt="" src={images.nftboxback2} />
      			<img className={styles.nftboxBack1Icon} alt="" src={images.nftboxback1}/>
      			<div className={styles.nft7Child} />
      			<div className={styles.nft7Item} />
      			<b className={styles.discoverExclusive}>{`Discover exclusive `}</b>
      			<b className={styles.nfts}>NFTs!</b>
      			<img className={styles.comingSoonIcon} alt="" src={images.ComingSoon}  />
    		</div>);
};

export default NFT;

