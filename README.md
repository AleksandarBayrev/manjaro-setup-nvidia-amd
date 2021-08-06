# MHWD Setup for NVIDIA + AMD

## Setup
### 1. Install Manjaro with proprietary drivers
### 2. Install optimus-manager
### 3. Switch to nvidia and reboot
### 4. Copy and paste this file into /etc/udev/rules.d/ in order to enable HDMI audio.
### 5. Configuration of login managers - https://wiki.archlinux.org/title/NVIDIA_Optimus

## Notes for Vulkan ICD Loader
### Use /etc/environments file to add this key-value pair - VK_ICD_FILENAMES=/usr/share/vulkan/icd.d/nvidia_icd.json
### This will load the vulkan driver