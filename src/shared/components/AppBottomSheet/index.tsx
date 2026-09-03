import { View } from "react-native"
import BottomSheet, { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetProps, BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { useBottomSheetStore } from "@/shared/store/bottom-sheet-store"
import { useCallback, useEffect, useMemo, useRef } from "react"
import { colors } from "@/styles/colors"
import { SafeAreaView } from "react-native-safe-area-context"

export const AppBottomSheet = () => {
    const { content, close, isOpen, config } = useBottomSheetStore()

    const bottomSheetRef = useRef<BottomSheet>(null)

    const snapPoints = useMemo(() => config?.snapPoints || ["80%", "90%"], [config?.snapPoints])

    useEffect(() => {
        if(isOpen && content){
            bottomSheetRef.current?.snapToIndex(0)
        }
        else{
            bottomSheetRef.current?.close()
        }
    }, [isOpen, content])

    const renderBackdrop = useCallback((props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop 
            appearsOnIndex={0} 
            disappearsOnIndex={1} 
            opacity={0.7} 
            pressBehavior="close"
            {...props}
        />
    ), [])

    const handleSheetChanges = useCallback((index: number) => {
        if(index === -1){
            close()
        }
    }, [close])
    

    return(
        <BottomSheet
            ref={bottomSheetRef}
            backdropComponent={renderBackdrop}
            backgroundStyle={{
                backgroundColor: colors.background,
                borderTopLeftRadius: 32,
                borderTopRightRadius: 32,
            }}
            enablePanDownToClose={config.enablePanDownToClose ?? true}
            index={-1}
            animateOnMount
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
        >
            <BottomSheetScrollView>
                <SafeAreaView>
                    {content}
                </SafeAreaView>
            </BottomSheetScrollView>
        </BottomSheet>
    )
}