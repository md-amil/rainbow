import React from "react";

export default function StackPage() {
  return (
    <>
      <div class="container">
        <nav
          class="navbar navbar-expand-lg navbar-dark bg-transparent nav-for-mobile"
        //   style="position: relative"
        style={{position:'absolute'}}
        >
          <a class="navbar-brand stake-brand" href="/">
            <img
              class="stake-logo"
              style="width: 200px"
              src="/images/img/logo.svg"
              alt="dpad-logo-with-name"
            />
          </a>
          <ul class="navbar-nav mr-auto ml-3 extra-links">
            {/* <!-- <li class="nav-item">
                    <a class="nav-link page" href="/">
                     Home
                    </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link page" href="https://www.youtube.com/channel/UC05XTz4x_KNisSHHwlgaSBA">
                       Talk Show
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link page" href="/allPartners">
                          Partners
                      </a>
                    </li> --> */}
          </ul>
          <div class="form-inline my-2 my-lg-0">
            <button
              id="connect-button"
              style={{zIndex:0}}
            //   style="z-index: 0"
              class="btn btn-outline-primary w-icon my-2 my-sm-0"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 9H7"
                  stroke="#4c6fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.0002 10.9699V13.03C22.0002 13.58 21.5602 14.0299 21.0002 14.0499H19.0402C17.9602 14.0499 16.9702 13.2599 16.8802 12.1799C16.8202 11.5499 17.0602 10.9599 17.4802 10.5499C17.8502 10.1699 18.3602 9.94995 18.9202 9.94995H21.0002C21.5602 9.96995 22.0002 10.4199 22.0002 10.9699Z"
                  stroke="#4c6fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  class="fill-it"
                  d="M17.48 10.55C17.06 10.96 16.82 11.55 16.88 12.18C16.97 13.26 17.96 14.05 19.04 14.05H21V15.5C21 18.5 19 20.5 16 20.5H7C4 20.5 2 18.5 2 15.5V8.5C2 5.78 3.64 3.88 6.19 3.56C6.45 3.52 6.72 3.5 7 3.5H16C16.26 3.5 16.51 3.50999 16.75 3.54999C19.33 3.84999 21 5.76 21 8.5V9.95001H18.92C18.36 9.95001 17.85 10.17 17.48 10.55Z"
                  stroke="#4c6fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Connect Wallet
            </button>
            <button
              id="disconnect-button"
              style="z-index:0"
              class="btn btn-primary w-icon my-2 my-sm-0"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 9H7"
                  stroke="#4c6fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.0002 10.9699V13.03C22.0002 13.58 21.5602 14.0299 21.0002 14.0499H19.0402C17.9602 14.0499 16.9702 13.2599 16.8802 12.1799C16.8202 11.5499 17.0602 10.9599 17.4802 10.5499C17.8502 10.1699 18.3602 9.94995 18.9202 9.94995H21.0002C21.5602 9.96995 22.0002 10.4199 22.0002 10.9699Z"
                  stroke="#4c6fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  class="fill-it"
                  d="M17.48 10.55C17.06 10.96 16.82 11.55 16.88 12.18C16.97 13.26 17.96 14.05 19.04 14.05H21V15.5C21 18.5 19 20.5 16 20.5H7C4 20.5 2 18.5 2 15.5V8.5C2 5.78 3.64 3.88 6.19 3.56C6.45 3.52 6.72 3.5 7 3.5H16C16.26 3.5 16.51 3.50999 16.75 3.54999C19.33 3.84999 21 5.76 21 8.5V9.95001H18.92C18.36 9.95001 17.85 10.17 17.48 10.55Z"
                  stroke="#4c6fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Disconnect Wallet
            </button>
          </div>
        </nav>
      </div>
      <div class="container spacer">
        <h2 class="text-white text-bold mb-3">DPAD Staking Program</h2>
        <p class="lead mb-5" style="color: #ffffffb0">
          Stake your DPAD tokens to earn high staking rewards
        </p>

        <div class="card" style="z-index: 0">
          <div class="card-body p-0">
            <div class="stack-wrap">
              <div class="stack-top">
                <div class="logo-left-box">
                  <img src="/images/img/logo-simple.png" alt="" />
                  <p>DPAD</p>
                </div>
                <ul class="stack-items">
                  <li>
                    <span id="balance">0</span>
                    <span>Balance</span>
                  </li>
                  <li>
                    <span id="staked">0</span>
                    <span>Staked DPAD</span>
                  </li>
                  <li>
                    <span id="apr">--</span>
                    <span>APR</span>
                  </li>
                  <li>
                    <span id="tvl">--</span>
                    <span>TVL</span>
                  </li>
                </ul>
              </div>

              <div class="stack-box">
                <div class="stack-row">
                  <div class="col">
                    <div class="flex-box">
                      <input
                        id="amount-input"
                        type="text"
                        class="form-control input-outline"
                        placeholder="Enter Amount"
                      />
                      <div class="row">
                        <div class="col">
                          <button
                            id="approve-btn"
                            style="height: 49px; border-radius: 8px"
                            class="btn btn-outline-primary btn-block mt-4"
                          >
                            Approve
                          </button>
                        </div>
                        <div class="col">
                          <button
                            id="stack-button"
                            disabled
                            style="height: 49px; border-radius: 8px"
                            class="btn btn-outline-primary btn-block mt-4"
                          >
                            Stake
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <hr style="border-color: #919191" class="visible-xs" />
                    <div class="flex-box">
                      <input
                        id="un-stake-amount-input"
                        type="text"
                        class="form-control input-outline"
                        placeholder="Enter Amount"
                      />
                      <button
                        id="un-stake-button"
                        style="height: 49px; border-radius: 8px"
                        class="btn btn-block btn-outline-primary mt-4"
                        btn-block
                      >
                        Unstake
                      </button>
                    </div>
                  </div>
                </div>
                <ul class="reward-info">
                  <li style="font-size: 15px" id="amount"></li>
                  <li style="font-size: 15px" id="reward"></li>
                  <li style="font-size: 15px" id="locked-till"></li>
                  <li>
                    <a
                      href="https://pancakeswap.finance/swap?outputCurrency=0x4DCAaa68170053aFBBdE15774931adba09272A55"
                      class="btn btn-outline-primary"
                    >
                      BUY $DPAD
                    </a>
                  </li>
                </ul>
              </div>
              <p
                id="note"
                style="margin-bottom: -10px; margin-top: 15px; color: #ffffff87; text-align: center"
              >
                <small>
                  {" "}
                  *Please connect wallet to view Balance, Staked amount, APR and
                  TVL{" "}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
