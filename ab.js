headerBackTitleVisible: false,
          headerTintColor: "#1F2123",
          headerBackVisible: false,
          headerStyle: { backgroundColor: "#1F2123", height:150 },
          headerLeft: () => <Image source={require("./assets/Muvi.png")} style={{height:50, width:150}}/>,
          headerRight: () => {
            return (
              <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
                <Icon
                  name="bookmark-outline"
                  type="material-community"
                  color={"white"}
                />
                <View>
                  <Icon
                    name="bell-outline"
                    type="material-community"
                    color={"white"}
                  />
                </View>
</View>