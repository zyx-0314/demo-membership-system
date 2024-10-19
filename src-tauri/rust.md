npm install @tauri-apps/api

rustup target add x86_64-pc-windows-msvc  

cargo install --locked cargo-xwin     

rustup toolchain install stable-x86_64-pc-windows-gnu   

rustup default stable-x86_64-pc-windows-gnu    

rustup toolchain install nightly-x86_64-pc-windows-msvc

rustup target add x86_64-pc-windows-msvc

rustup component add llvm-tools-preview --toolchain=nightly

rustup default nightly-x86_64-pc-windows-msvc

npm run tauri build -- --runner cargo-xwin --target x86_64-pc-windows-gnullvm
npm run tauri build -- --runner cargo-xwin --target x86_64-pc-windows-gnu
