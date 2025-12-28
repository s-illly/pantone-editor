from colorthief import ColorThief
#import colorsys
#import matplotlib.pyplot as plt
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from io import BytesIO

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:5174"], 
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/analyze")
async def analyze_image(file: UploadFile = File(...)):
    contents = await file.read()
    ct = ColorThief(BytesIO(contents))

    #dominant_color = ct.get_color(quality=1)
    # plt.imshow([[dominant_color]])
    # plt.show()

    palette = ct.get_palette(color_count=3)
    # plt.imshow([[palette[i] for i in range(4)]])
    # plt.show()
    colors = []
    for color in palette:
        colors.append(f"#{color[0]:02x}{color[1]:02x}{color[2]:02x}")
        # print(color)
        print(f"#{color[0]:02x}{color[1]:02x}{color[2]:02x}")
        # print(colorsys.rgb_to_hsv(*color))
        # print(colorsys.rgb_to_hls(*color))

    
    return colors
