import React from 'react';
import styles from '../css_modules/HOMEPAGE.module.css';
import { images } from '../StoreImages/StoreImages';
import { ConnectWallet } from '../walletIntegration';
import { useNavigate } from 'react-router-dom';

const HOMEPAGE: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className={styles.homePage1}>
      {/* Background and Profile Section */}
      <img className={styles.altcoinbgIcon} alt="Altcoin Background" src={images.AltcoinBg} />
      <div className={styles.profilerectangle} />
      <img className={styles.userlogoIcon} alt="User Logo" src={images.UserLogo} />
      <b className={styles.wxyz}>WXYZ</b>
      <img className={styles.useropenicon} alt="User Open Icon" src={images.UserOpenIcon} />
      
      {/* Wallet Connect Button */}
      <div className={styles.walletButton}>
        <ConnectWallet />
      </div>

      {/* Token Price & Countdown Section */}
      <div className={styles.altcoinrec} />
      <div className={styles.tokenpricerec} />
      <img className={styles.days12leftIcon} alt="Days Left Icon" src={images.Days12Left} />
      <b className={styles.altcoinist}>ALTCOINIST</b>

      {/* Navigation Links */}
      <div className={styles.homePage1Child} onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
      <div className={styles.homePage1Item} onClick={() => navigate('/home2')} style={{ cursor: 'pointer' }} />
      <div className={styles.homePage1Inner} onClick={() => navigate('/home3')} style={{ cursor: 'pointer' }} />

      {/* Action Buttons and Icons */}
      <img className={styles.buttonsBackground} alt="Buttons Background" src={images.ButtonsBackground} />
      <img className={styles.cursorbuttonsIcon} alt="Cursor Buttons" src={images.CursorButtons} />
      <b className={styles.apply}>Apply To Organize ICO</b>
      <div className={styles.apply1}>Apply to organize an ICO by ensuring compliance with legal and regulatory requirements.</div>

      {/* Image and Active Info */}
      <img className={styles.altcoinimgIcon} alt="Altcoin Image" src={images.AltcoinImg} />
      <img className={styles.activeborderimageIcon} alt="Active Border Image" src={images.ActiveBorderImage} />
      <b className={styles.active}>ACTIVE</b>

      {/* Token Price and Timer Section */}
      <b className={styles.tokenPrice}>TOKEN PRICE</b>
      <b className={styles.b}>
        <span className={styles.txt}>
          <p className={styles.p}>10/11/2024</p>
          <p className={styles.p1}>16:30</p>
        </span>
      </b>
      <b className={styles.b1}>
        <span className={styles.txt}>
          <p className={styles.p}>30/11/2024</p>
          <p className={styles.p1}>16:30</p>
        </span>
      </b>
      <b className={styles.d02h20m}>12d 02h 20m 48s LEFT</b>
      <b className={styles.usdt}>0.009122 USDT</b>

      {/* Icons for Multiple Actions */}
      <img className={styles.mutliplediscIcon} alt="Multiple Disc" src={images.MutlipleDisc} />
      <img className={styles.discIcon} alt="Disc Icon" src={images.Disc} />
      <div className={styles.full} />
      <div className={styles.full80} />
      <img className={styles.calenderIcon} alt="Calendar Icon" src={images.calender} />
      <img className={styles.calenderIcon1} alt="Calendar Icon" src={images.calender} />
      <img className={styles.clockIcon} alt="Clock Icon" src={images.clock} />
      <img className={styles.clockIcon1} alt="Clock Icon" src={images.clock} />
      <img className={styles.timerIcon} alt="Timer Icon" src={images.Timer} />

      {/* NFT and Stake Sections */}
      <div className={styles.nftimagerec} />
      <div className={styles.stakeimagerec} />
      <img className={styles.nftimageIcon} alt="NFT Image" src={images.NftImage} />
      <img className={styles.stakeimageIcon} alt="Stake Image" src={images.StakeImage} />
      <div className={styles.nfttextrec} />
      <div className={styles.rectangleDiv} />
      <b className={styles.nft}>NFT</b>
      <b className={styles.stake}>STAKE</b>
    </div>
  );
};

export default HOMEPAGE;
