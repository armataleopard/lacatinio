document.addEventListener('DOMContentLoaded', function() {
    // Loading screen animation
    const loadingScreen = document.getElementById('loading-screen');
    const appContainer = document.getElementById('app-container');
    const progressBar = document.querySelector('.progress-bar');
    const catElements = document.querySelector('.cat-elements');
    
    // Create cat elements
    for (let i = 0; i < 10; i++) {
        const catEl = document.createElement('div');
        catEl.className = 'cat-element';
        catEl.style.cssText = `
            position: absolute;
            width: 20px;
            height: 20px;
            background-color: #6e42ca;
            border-radius: 50%;
            opacity: 0;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
        `;
        catElements.appendChild(catEl);
        
        // Animate cat elements
        setTimeout(() => {
            catEl.style.opacity = '1';
            setTimeout(() => {
                catEl.style.transition = 'all 1.5s ease';
                catEl.style.transform = `translate(${(Math.random() - 0.5) * 200}px, ${(Math.random() - 0.5) * 200}px)`;
                catEl.style.opacity = '0';
            }, i * 100);
        }, i * 100);
    }
    
    // Animate progress bar
    progressBar.style.transition = 'width 2.5s ease-in-out';
    progressBar.style.width = '100%';
    
    // Hide loading screen after 3 seconds
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            appContainer.style.opacity = '1';
            appContainer.style.visibility = 'visible';
            appContainer.style.transition = 'opacity 0.5s ease';
            
            // Initialize the rest of the site
            initSite();
        }, 500);
    }, 3000);
    
    // Custom cursor
    const cursor = document.querySelector('.custom-cursor');
    const cursorTrail = document.querySelector('.cursor-trail');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorTrail.style.left = e.clientX + 'px';
            cursorTrail.style.top = e.clientY + 'px';
        }, 100);
    });
    
    // Change cursor type on hover
    const cursorElements = document.querySelectorAll('[data-cursor-type]');
    
    cursorElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            const cursorType = el.dataset.cursorType;
            switch(cursorType) {
                case 'button':
                    cursor.style.width = '8px';
                    cursor.style.height = '8px';
                    cursorTrail.style.width = '40px';
                    cursorTrail.style.height = '40px';
                    break;
                case 'link':
                    cursor.style.width = '10px';
                    cursor.style.height = '10px';
                    cursorTrail.style.width = '35px';
                    cursorTrail.style.height = '35px';
                    break;
                case 'image':
                    cursor.style.width = '8px';
                    cursor.style.height = '8px';
                    cursorTrail.style.width = '45px';
                    cursorTrail.style.height = '45px';
                    break;
                default:
                    cursor.style.width = '12px';
                    cursor.style.height = '12px';
                    cursorTrail.style.width = '30px';
                    cursorTrail.style.height = '30px';
            }
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.width = '12px';
            cursor.style.height = '12px';
            cursorTrail.style.width = '30px';
            cursorTrail.style.height = '30px';
        });
    });
});

function initSite() {
    // Hero section animations
    initHeroSection();
    
    // Section 1 animations
    initSection1();
    
    // Section 2 animations
    initSection2();
    
    // Section 3 animations
    initSection3();
    
    // Section 4 animations
    initSection4();
    
    // Section 5 animations
    initSection5();
    
    // Footer animations
    initFooter();
    
    // Scroll to section functionality
    document.getElementById('enter-button').addEventListener('click', () => {
        document.getElementById('section1').scrollIntoView({ behavior: 'smooth' });
    });
}

function initHeroSection() {
    const backgroundElements = document.querySelector('.background-elements');
    const heroTitle = document.querySelector('.hero-title');
    
    // Create floating elements
    for (let i = 0; i < 15; i++) {
        const size = Math.random() * 50 + 10;
        const el = document.createElement('div');
        el.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background-color: rgba(110, 66, 202, ${Math.random() * 0.2 + 0.1});
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.5 + 0.1};
            transform: translate(-50%, -50%);
            pointer-events: none;
            animation: float ${Math.random() * 10 + 10}s ease-in-out infinite alternate;
        `;
        backgroundElements.appendChild(el);
    }
    
    // Add floating animation
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes float {
            0% { transform: translate(0, 0); }
            100% { transform: translate(${Math.random() * 50}px, ${Math.random() * 50}px); }
        }
        
        .hero-title {
            animation: glow 3s ease-in-out infinite alternate;
        }
        
        @keyframes glow {
            0% { text-shadow: 0 0 10px rgba(110, 66, 202, 0.7); }
            100% { text-shadow: 0 0 20px rgba(138, 99, 244, 0.9); }
        }
    `;
    document.head.appendChild(style);
    
    // Mouse movement effect
    document.addEventListener('mousemove', (e) => {
        const xPos = (e.clientX / window.innerWidth - 0.5) * 20;
        const yPos = (e.clientY / window.innerHeight - 0.5) * 20;
        
        const elements = backgroundElements.children;
        for (let i = 0; i < elements.length; i++) {
            const el = elements[i];
            const factor = i % 5 === 0 ? -1 : 1;
            el.style.transform = `translate(${xPos * factor}px, ${yPos * (i % 3 === 0 ? -1 : 1)}px)`;
        }
    });
}

function initSection1() {
    const catSnailImage = document.getElementById('cat-snail-image');
    const glowEffect = document.querySelector('.glow-effect');
    const slimeTrail = document.querySelector('.slime-trail');
    
    // Rotate image slowly
    catSnailImage.style.animation = 'rotate 120s linear infinite';
    
    // Add keyframe for rotation
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    // Glow effect animation
    glowEffect.style.animation = 'glow-pulse 2s ease-in-out infinite alternate';
    
    // Add keyframe for glow
    const style2 = document.createElement('style');
    style2.innerHTML = `
        @keyframes glow-pulse {
            0% { opacity: 0; }
            100% { opacity: 0.8; }
        }
    `;
    document.head.appendChild(style2);
    
    // Slime trail animation
    slimeTrail.style.animation = 'slime-move 15s linear infinite, slime-pulse 3s ease-in-out infinite alternate';
    
    // Add keyframes for slime
    const style3 = document.createElement('style');
    style3.innerHTML = `
        @keyframes slime-move {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        
        @keyframes slime-pulse {
            0% { opacity: 0; transform: scaleX(1) scaleY(1); }
            100% { opacity: 1; transform: scaleX(1.5) scaleY(0.7); }
        }
    `;
    document.head.appendChild(style3);
    
    // Sound effect on hover
    const imageWrapper = document.querySelector('#section1 .image-wrapper');
    imageWrapper.addEventListener('mouseenter', () => {
        console.log('Meow-slither sound effect played');
        // In a real implementation, this would play a sound effect
    });
}

function initSection2() {
    const catFishImage = document.getElementById('cat-fish-image');
    const bubbles = document.getElementById('bubbles');
    
    // Create bubbles
    for (let i = 0; i < 20; i++) {
        const size = Math.random() * 20 + 5;
        const bubble = document.createElement('div');
        bubble.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background-color: rgba(138, 99, 244, ${Math.random() * 0.1 + 0.05});
            border-radius: 50%;
            bottom: ${-size}px;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.7 + 0.3};
            transform: translateX(-50%);
            pointer-events: none;
            animation: bubble-rise ${Math.random() * 15 + 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        bubbles.appendChild(bubble);
    }
    
    // Add keyframe for bubbles
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes bubble-rise {
            0% { transform: translate(-50%, 0); }
            100% { transform: translate(calc(-50% + ${(Math.random() - 0.5) * 200}px), -${window.innerHeight + 100}px); }
        }
    `;
    document.head.appendChild(style);
    
    // Swimming animation for the cat-fish
    catFishImage.style.animation = 'swim 9s ease-in-out infinite';
    
    // Add keyframe for swimming
    const style2 = document.createElement('style');
    style2.innerHTML = `
        @keyframes swim {
            0% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(10px, -10px) rotate(5deg); }
            66% { transform: translate(-10px, 5px) rotate(-3deg); }
            100% { transform: translate(5px, 8px) rotate(2deg); }
        }
    `;
    document.head.appendChild(style2);
    
    // Handle image click for swimming faster
    const imageWrapper = document.querySelector('#section2 .image-wrapper');
    imageWrapper.addEventListener('click', () => {
        catFishImage.style.animation = 'swim-fast 1.5s ease-in-out';
        catFishImage.style.filter = 'hue-rotate(90deg)';
        
        setTimeout(() => {
            catFishImage.style.animation = 'swim 9s ease-in-out infinite';
            catFishImage.style.filter = 'none';
        }, 1500);
    });
    
    // Add keyframe for fast swimming
    const style3 = document.createElement('style');
    style3.innerHTML = `
        @keyframes swim-fast {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style3);
}

function initSection3() {
    const catGuardianImage = document.getElementById('cat-guardian-image');
    const gunGlint = document.querySelector('.gun-glint');
    const reticle = document.getElementById('reticle');
    
    // Cat tail twitching animation
    catGuardianImage.style.animation = 'tail-twitch 3s ease-in-out infinite alternate';
    
    // Add keyframe for tail twitching
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes tail-twitch {
            0% { transform: scale(1); }
            100% { transform: scale(1.01); }
        }
    `;
    document.head.appendChild(style);
    
    // Gun glint animation
    setInterval(() => {
        gunGlint.style.opacity = '0.8';
        setTimeout(() => {
            gunGlint.style.opacity = '0';
        }, 200);
    }, 5000);
    
    // Gun hover effect with reticle
    const gunWrapper = document.querySelector('.gun-wrapper');
    gunWrapper.addEventListener('mousemove', (e) => {
        const rect = gunWrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Only trigger in the area where the gun would be
        if (x > rect.width * 0.5 && y < rect.height * 0.6) {
            reticle.style.opacity = '0.8';
            reticle.style.left = x + 'px';
            reticle.style.top = y + 'px';
            
            // Play pew sound - in real implementation this would be a sound effect
            console.log('Pew-pew sound effect played');
        } else {
            reticle.style.opacity = '0';
        }
    });
    
    gunWrapper.addEventListener('mouseleave', () => {
        reticle.style.opacity = '0';
    });
}

function initSection4() {
    const catBunnyImage = document.getElementById('cat-bunny-image');
    const cloverField = document.getElementById('clover-field');
    
    // Ear twitching animation
    setInterval(() => {
        catBunnyImage.style.transition = 'all 0.2s ease';
        catBunnyImage.style.transform = 'scaleY(1.02) scaleX(0.98)';
        
        setTimeout(() => {
            catBunnyImage.style.transform = 'scaleY(1) scaleX(1)';
            
            setTimeout(() => {
                catBunnyImage.style.transform = 'scaleY(1.01) scaleX(0.99)';
                
                setTimeout(() => {
                    catBunnyImage.style.transform = 'scaleY(1) scaleX(1)';
                }, 150);
            }, 200);
        }, 200);
    }, 6000);
    
    // Create clovers
    for (let i = 0; i < 10; i++) {
        const clover = document.createElement('div');
        clover.style.cssText = `
            position: absolute;
            width: 20px;
            height: 20px;
            bottom: ${Math.random() * 30}px;
            left: ${Math.random() * 100}%;
            opacity: 0;
            background-color: rgba(110, 202, 110, 0.8);
            clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
            transform: rotate(${Math.random() * 360}deg);
        `;
        cloverField.appendChild(clover);
    }
    
    // Handle click for hopping effect and clover growth
    const imageWrapper = document.querySelector('#section4 .image-wrapper');
    imageWrapper.addEventListener('click', () => {
        // Hop animation
        imageWrapper.style.transition = 'transform 0.2s ease';
        imageWrapper.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            imageWrapper.style.transform = 'translateY(0)';
        }, 400);
        
        // Show clover field
        cloverField.style.opacity = '1';
        
        // Animate clovers growing
        const clovers = cloverField.children;
        for (let i = 0; i < clovers.length; i++) {
            const clover = clovers[i];
            setTimeout(() => {
                clover.style.transition = 'all 0.5s ease';
                clover.style.opacity = '1';
                clover.style.transform = `rotate(${Math.random() * 360}deg) scale(${1 + Math.random() * 0.5})`;
                
                // After a while, fade them out
                setTimeout(() => {
                    clover.style.opacity = '0';
                    clover.style.transform = 'scale(0)';
                }, 2000 + i * 100);
            }, i * 100);
        }
        
        // After all clovers are gone, hide the field
        setTimeout(() => {
            cloverField.style.opacity = '0';
        }, 3500);
    });
}

function initSection5() {
    const starryBackground = document.getElementById('starry-background');
    const owl1Image = document.getElementById('owl1-image');
    const owl2Image = document.getElementById('owl2-image');
    const prawnImage = document.getElementById('prawn-image');
    
    // Create stars
    for (let i = 0; i < 100; i++) {
        const size = Math.random() * 3 + 1;
        const star = document.createElement('div');
        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background-color: white;
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.7 + 0.3};
            animation: twinkle ${Math.random() * 3 + 1}s ease-in-out infinite alternate;
        `;
        starryBackground.appendChild(star);
    }
    
    // Add keyframe for twinkling
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes twinkle {
            0% { opacity: ${Math.random() * 0.5 + 0.1}; }
            100% { opacity: ${Math.random() * 0.7 + 0.3}; }
        }
    `;
    document.head.appendChild(style);
    
    // Owl eye blinking animation
    setInterval(() => {
        owl1Image.style.transition = 'transform 0.1s ease';
        owl1Image.style.transform = 'scaleY(0.95)';
        
        setTimeout(() => {
            owl1Image.style.transform = 'scaleY(1)';
        }, 100);
    }, Math.random() * 5000 + 3000);
    
    setInterval(() => {
        owl2Image.style.transition = 'transform 0.1s ease';
        owl2Image.style.transform = 'scaleY(0.95)';
        
        setTimeout(() => {
            owl2Image.style.transform = 'scaleY(1)';
        }, 100);
    }, Math.random() * 5000 + 3000);
    
    // Prawn tail flick animation
    const prawnFlick = () => {
        prawnImage.style.transition = 'transform 0.3s ease';
        prawnImage.style.transform = 'rotate(2deg) translateX(5px)';
        
        setTimeout(() => {
            prawnImage.style.transform = 'rotate(0) translateX(0)';
            
            setTimeout(() => {
                prawnImage.style.transform = 'rotate(-2deg) translateX(-5px)';
                
                setTimeout(() => {
                    prawnImage.style.transform = 'rotate(0) translateX(0)';
                }, 300);
            }, 300);
        }, 300);
    };
    
    setInterval(prawnFlick, 2000);
    
    // Handle hover for owl eye blink
    const owl1Wrapper = document.querySelector('#owl1-image').parentElement;
    owl1Wrapper.addEventListener('mouseenter', () => {
        owl1Image.style.transition = 'all 0.2s ease';
        owl1Image.style.transform = 'scale(1.02)';
        
        setTimeout(() => {
            owl1Image.style.transform = 'scale(1.02) scaleY(0.95)';
            
            setTimeout(() => {
                owl1Image.style.transform = 'scale(1.02)';
                
                setTimeout(() => {
                    owl1Image.style.transform = 'scale(1.02) scaleY(0.95)';
                    
                    setTimeout(() => {
                        owl1Image.style.transform = 'scale(1.02)';
                    }, 100);
                }, 100);
            }, 100);
        }, 200);
    });
    
    owl1Wrapper.addEventListener('mouseleave', () => {
        owl1Image.style.transform = 'scale(1)';
    });
    
    const owl2Wrapper = document.querySelector('#owl2-image').parentElement;
    owl2Wrapper.addEventListener('mouseenter', () => {
        owl2Image.style.transition = 'all 0.2s ease';
        owl2Image.style.transform = 'scale(1.02)';
        
        setTimeout(() => {
            owl2Image.style.transform = 'scale(1.02) scaleY(0.95)';
            
            setTimeout(() => {
                owl2Image.style.transform = 'scale(1.02)';
            }, 100);
        }, 200);
    });
    
    owl2Wrapper.addEventListener('mouseleave', () => {
        owl2Image.style.transform = 'scale(1)';
    });
    
    // Handle hover for prawn tail flick
    const prawnWrapper = document.querySelector('.prawn-wrapper');
    prawnWrapper.addEventListener('mouseenter', () => {
        prawnWrapper.style.transition = 'transform 0.2s ease';
        prawnWrapper.style.transform = 'scale(1.02)';
        
        prawnImage.style.transition = 'transform 0.2s ease';
        prawnImage.style.transform = 'rotate(5deg)';
        
        setTimeout(() => {
            prawnImage.style.transform = 'rotate(0)';
            
            setTimeout(() => {
                prawnImage.style.transform = 'rotate(5deg)';
                
                setTimeout(() => {
                    prawnImage.style.transform = 'rotate(0)';
                }, 200);
            }, 200);
        }, 200);
    });
    
    prawnWrapper.addEventListener('mouseleave', () => {
        prawnWrapper.style.transform = 'scale(1)';
    });
}

function initFooter() {
    const socialButton = document.querySelector('.social-button');
    const hiddenElement = document.getElementById('hidden-element');
    
    // Button hover effect
    socialButton.addEventListener('mouseenter', () => {
        socialButton.style.transition = 'all 0.3s ease';
        socialButton.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    socialButton.addEventListener('mouseleave', () => {
        socialButton.style.transition = 'all 0.3s ease';
        socialButton.style.transform = 'translateY(0) scale(1)';
    });
    
    // Hidden element click for easter egg
    hiddenElement.addEventListener('click', () => {
        // In a real implementation, this would play a meow sound
        console.log('Meow sound effect played');
        
        hiddenElement.style.transition = 'all 0.2s ease';
        hiddenElement.style.transform = 'scale(10)';
        hiddenElement.style.opacity = '0.5';
        
        setTimeout(() => {
            hiddenElement.style.transform = 'scale(1)';
            hiddenElement.style.opacity = '0';
        }, 400);
    });
} 