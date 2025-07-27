#!/bin/bash

# Image Download Script for Next.js Project
# Downloads images from Imgur URLs and saves them locally with custom filenames

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
DOWNLOAD_DIR="public/images"
LOG_FILE="download-images.log"
MAX_RETRIES=3
RETRY_DELAY=2

# Create log file with timestamp
echo "=== Image Download Script Started: $(date) ===" >> "$LOG_FILE"

# Create download directory if it doesn't exist
if [ ! -d "$DOWNLOAD_DIR" ]; then
    echo -e "${BLUE}Creating directory: $DOWNLOAD_DIR${NC}"
    mkdir -p "$DOWNLOAD_DIR"
    echo "Created directory: $DOWNLOAD_DIR" >> "$LOG_FILE"
fi

# Define images as parallel arrays (compatible with older bash)
# Each index corresponds to the same image
FILENAMES=(
    # Sponsor logos from sponsors.ts
    "nav-canada.png"
    "futureskills-foundation.png"
    "career-pathways-network.png"
    "your-company.png"
    "teachtech-resources.png"
    "community-champions.png"
    "education-partners-alliance.png"
    
    # Carousel sponsor logos from carousel-sponsors.ts
    "placeholder-incentive.png"
    "manufacturing-excellence.png"
    "series-completion-1.png"
    "school-level-1.png"
    "educator-level.png"
    "series-completion-2.png"
    "school-level-2.png"
    "your-company-carousel.png"
    
    # Avatar images from SponsorAvatarGroup.tsx
    "avatar-default.png"
    "avatar-1.png"
    "avatar-2.png"
    "avatar-3.png"
    "avatar-5.png"
    "avatar-6.png"
    "avatar-7.png"
    "avatar-8.png"
    
    # Meta image from layout.tsx
    "meta-preview.png"
)

URLS=(
    # Sponsor logos from sponsors.ts
    "https://i.imgur.com/ov7BCR3.png"
    "https://i.imgur.com/Kasr1qf.png"
    "https://i.imgur.com/9zruie6.png"
    "https://i.imgur.com/YLr3fny.png"
    "https://i.imgur.com/N7or0Sk.png"
    "https://i.imgur.com/ZLkRWT7.png"
    "https://i.imgur.com/i7Z0Mlc.png"
    
    # Carousel sponsor logos from carousel-sponsors.ts
    "https://i.imgur.com/mQptCyT.png"
    "https://i.imgur.com/nCuNSzS.png"
    "https://i.imgur.com/Iqym2KC.png"
    "https://i.imgur.com/cKycLKq.png"
    "https://i.imgur.com/I4Tt3U4.png"
    "https://i.imgur.com/hpkZO4a.png"
    "https://i.imgur.com/ZZxAxLI.png"
    "https://i.imgur.com/Cr2B9G6.png"
    
    # Avatar images from SponsorAvatarGroup.tsx
    "https://i.imgur.com/H8aWe1S.png"
    "https://i.imgur.com/drvople.png"
    "https://i.imgur.com/d0woLhT.png"
    "https://i.imgur.com/5LyeXPx.png"
    "https://i.imgur.com/ACZNXKu.png"
    "https://i.imgur.com/xNtPmLx.png"
    "https://i.imgur.com/JiyD4VO.png"
    "https://i.imgur.com/qGJAjd0.png"
    
    # Meta image from layout.tsx
    "https://i.imgur.com/Op4S0Z1.png"
)

# Function to log messages to both console and file
log_message() {
    local level=$1
    local message=$2
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case $level in
        "INFO")
            echo -e "${BLUE}[INFO]${NC} $message"
            ;;
        "SUCCESS")
            echo -e "${GREEN}[SUCCESS]${NC} $message"
            ;;
        "WARNING")
            echo -e "${YELLOW}[WARNING]${NC} $message"
            ;;
        "ERROR")
            echo -e "${RED}[ERROR]${NC} $message"
            ;;
    esac
    
    echo "[$timestamp] [$level] $message" >> "$LOG_FILE"
}

# Function to download image with retry logic
download_image() {
    local filename=$1
    local url=$2
    local filepath="$DOWNLOAD_DIR/$filename"
    local attempt=1
    
    # Check if file already exists
    if [ -f "$filepath" ]; then
        log_message "INFO" "File already exists, skipping: $filename"
        return 0
    fi
    
    log_message "INFO" "Downloading: $filename from $url"
    
    # Try downloading with retries
    while [ $attempt -le $MAX_RETRIES ]; do
        if curl -L -s -o "$filepath" "$url"; then
            # Verify the download was successful
            if [ -f "$filepath" ] && [ -s "$filepath" ]; then
                # Check if it's actually an image
                if file "$filepath" | grep -qE 'image|JPEG|PNG|GIF'; then
                    log_message "SUCCESS" "Downloaded successfully: $filename (attempt $attempt)"
                    return 0
                else
                    log_message "ERROR" "Downloaded file is not a valid image: $filename"
                    rm -f "$filepath"
                    return 1
                fi
            else
                log_message "ERROR" "Download resulted in empty or missing file: $filename"
                rm -f "$filepath"
            fi
        else
            log_message "WARNING" "Download failed for $filename (attempt $attempt of $MAX_RETRIES)"
        fi
        
        if [ $attempt -lt $MAX_RETRIES ]; then
            log_message "INFO" "Retrying in $RETRY_DELAY seconds..."
            sleep $RETRY_DELAY
        fi
        
        ((attempt++))
    done
    
    log_message "ERROR" "Failed to download $filename after $MAX_RETRIES attempts"
    return 1
}

# Main execution
echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  Image Download Script for Next.js${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Count total images
total_images=${#FILENAMES[@]}
log_message "INFO" "Found $total_images images to process"

# Track statistics
downloaded=0
skipped=0
failed=0

# Download each image
for i in "${!FILENAMES[@]}"; do
    filename="${FILENAMES[$i]}"
    url="${URLS[$i]}"
    
    if download_image "$filename" "$url"; then
        if [ -f "$DOWNLOAD_DIR/$filename" ]; then
            ((skipped++))
        else
            ((downloaded++))
        fi
    else
        ((failed++))
    fi
    
    echo "" # Empty line for readability
done

# Summary
echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}           Download Summary${NC}"
echo -e "${BLUE}========================================${NC}"
echo -e "${GREEN}Downloaded:${NC} $downloaded new images"
echo -e "${YELLOW}Skipped:${NC}    $skipped existing images"
echo -e "${RED}Failed:${NC}     $failed images"
echo -e "${BLUE}Total:${NC}      $total_images images processed"
echo ""

log_message "INFO" "Script completed. Downloaded: $downloaded, Skipped: $skipped, Failed: $failed"

# Show log file location
echo -e "${BLUE}Log file:${NC} $LOG_FILE"

# Exit with appropriate code
if [ $failed -gt 0 ]; then
    exit 1
else
    exit 0
fi