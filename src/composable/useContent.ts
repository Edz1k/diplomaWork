// eslint-disable-next-line no-unused-vars
import { collection, deleteDoc, doc, getDocs, addDoc, type DocumentData } from 'firebase/firestore'
import { db } from '@/firebase'
import { deleteObject } from 'firebase/storage'
// eslint-disable-next-line no-unused-vars
// import { getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'
import { ref } from 'vue'
import { useUser } from './useAnything'

const content = ref()
const newContent = ref({
  author: '',
  userId: '',
  text: '',
  photo: '',
  stars: 4,
  date: 0,
})
const contentList = ref([] as DocumentData)

const selectedReview = ref('')

export const useContent = () => {

  const loading = ref({
    content: false,
    contentList: false,
    newContent: false
  })

  async function getAllContent() {
    loading.value.contentList = true
    contentList.value.length = 0;
    try {
      const querySnapshot = await getDocs(collection(db, 'content'))
      querySnapshot.forEach((doc) => {
        const compressive = {
          firebaseId: doc.id,
          ...doc.data()
        }
        contentList.value.push(compressive)
      })

      loading.value.contentList = false
    } catch (error) {
      console.error(error)
    }
  }

  async function addContent() {
    const { user } = useUser()
    loading.value.newContent = true
    try {
      if (newContent.value && user.value) {
        newContent.value.author = user.value.displayName
        newContent.value.photo = user.value.photoURL
        newContent.value.date = new Date().getTime()
        newContent.value.userId = user.value.uid
        if(newContent.value.text){
          const res = await addDoc(collection(db, 'content'), newContent.value)
          return res
        }      
        loading.value.newContent = false
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteDocById(firebaseId: string) {
    loading.value.content = true
    try {
      await deleteDoc(doc(db, 'content', firebaseId))
      loading.value.content = false
    } catch (error) {
      console.error(error)
    }
  }

  async function getContentById(id: string) {
    loading.value.content = true
    try {
      const querySnapshot = await getDocs(collection(db, 'content'))
      querySnapshot.forEach((doc) => {
        if (doc.id === id) {
          content.value = doc.data()
        }
      })
      loading.value.content = false
    } catch (error) {
      console.error(error)
    }
  }

   async function onChangeEditButton(review: any) {
    selectedReview.value = review
    await deleteDocById(review.firebaseId)
    await getAllContent()
  }


  return {
    content,
    newContent,
    getContentById,
    addContent,
    deleteDocById,
    getAllContent,
    contentList,
    loading,
    onChangeEditButton,
    selectedReview,

  }
}
